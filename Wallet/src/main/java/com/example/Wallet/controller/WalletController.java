package com.example.Wallet.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Wallet.dto.LoginDto;
import com.example.Wallet.dto.TransferWallet;
import com.example.Wallet.dto.Wallet;
import com.example.Wallet.exception.WalletException;
import com.example.Wallet.service.WalletService;
import com.example.Wallet.service.WalletServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class WalletController {
	
	private WalletService walletService = new WalletServiceImpl();

	@GetMapping("/")
	public String Greet() {
		return "Welcome to Wallet App.";
	}

	@PostMapping("wallet")
	public Wallet addWallet(@RequestBody Wallet wallet) throws WalletException {
		return this.walletService.registerWallet(wallet);
	}
	
	@PostMapping("wallet/login")
	public boolean loginwallet(@RequestBody LoginDto logindto) throws WalletException {
		System.out.println(logindto);
		return this.walletService.login(logindto.getId(),logindto.getPassword());
	}

	@GetMapping("wallet/{id}")
	public Double getWalletBalanceById(@PathVariable("id") Integer id) throws WalletException {
		return this.walletService.showWalletBalanceById(id);

	}
	
	@GetMapping("wallet/display/{id}")
	public Wallet getWallet(@PathVariable("id") Integer id) throws WalletException {
		System.out.println(id);
		System.out.println("IN get wallet");
		return this.walletService.getWallet(id);

	}
	@PostMapping("wallet/addfund")
	public Double addFundsToWallet(@RequestBody TransferWallet walletDto) throws WalletException {
		System.out.println(walletDto);
		return this.walletService.addFundsToWallet(walletDto.getId(),walletDto.getAmount());

	}

	@PostMapping("wallet/fund")
	public Boolean fundTransfer(@RequestBody TransferWallet walletDto) throws WalletException {
		System.out.println(walletDto);
		return this.walletService.fundTransfer(walletDto.getId(),walletDto.getToId(),walletDto.getAmount());

	}
	
	@PostMapping("wallet/withdraw")
	public Double withdraw(@RequestBody TransferWallet walletDto) throws WalletException {
		return this.walletService.withdrawFundsFromWallet(walletDto.getId(), walletDto.getAmount());

	}
	
	@DeleteMapping("wallet")
	public Boolean deletewallet(@RequestBody LoginDto logindto)throws WalletException {
		return this.walletService.unregisterWallet(logindto.getId(), logindto.getPassword());

	}
	
	
}
