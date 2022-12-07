package com.example.Wallet.service;

import com.example.Wallet.dao.DaoUtility;
import com.example.Wallet.dao.WalletDao;
import com.example.Wallet.dao.WalletDaoDBImpl;
import com.example.Wallet.dao.WalletDaoImpl;
import com.example.Wallet.dto.Wallet;
import com.example.Wallet.exception.WalletException;

public class WalletServiceImpl implements WalletService {
 
	private WalletDao walletRepository = new WalletDaoDBImpl(DaoUtility.getConnectionToMySQL());

	// private WalletDao walletRepository = new WalletDaoImpl();

	private Wallet wallet;

	private Boolean isloggedin = false;
	private Boolean isdeleted = false;

	@Override
	public Wallet registerWallet(Wallet newWallet) throws WalletException {
		// TODO Auto-generated method stub
		Wallet wallet = walletRepository.getWalletById(newWallet.getId());
		if (wallet == null)
			wallet = this.walletRepository.addWallet(newWallet);
		else
			throw new WalletException("Wallet id already exist");

		return wallet;

	}

	@Override
	public Boolean login(Integer walletId, String password) throws WalletException {
		// TODO Auto-generated method stub
		Wallet wallet = this.walletRepository.getWalletById(walletId);
		if (wallet == null)
			throw new WalletException("Wallet id not found");
		if (!wallet.getPassword().equals(password))
			throw new WalletException("Password does't match to wallet id.");
		isloggedin = true;
		this.wallet = wallet;
		return isloggedin;

	}

	public Boolean logout() throws WalletException {
		// TODO Auto-generated method stub
		if (this.wallet == null)
			throw new WalletException("You are not logged in!!!");
		this.wallet = null;
		this.isloggedin = false;
		return this.isloggedin;

	}

	@Override
	public Double addFundsToWallet(Integer walletId,Double amount) throws WalletException {
		// TODO Auto-generated method stub
		Wallet wallet = this.walletRepository.getWalletById(walletId);
		if (amount <= 0)
			throw new WalletException("Amount cannot be less than or equal to zero");
		if (wallet == null)
			throw new WalletException("Wallet id not exist");
		wallet.setBalance(wallet.getBalance() + amount);
		this.walletRepository.updateWallet(wallet);
		return wallet.getBalance();
	}

	@Override
	public Double showWalletBalanceById(Integer walletId) throws WalletException {
		// TODO Auto-generated method stub
		Wallet wallet = this.walletRepository.getWalletById(walletId);
		if (wallet == null)
			throw new WalletException("Wallet id not exist");
		return wallet.getBalance();

	}

	@Override
	public Boolean fundTransfer(Integer id,Integer toId, Double amount) throws WalletException {
		// TODO Auto-generated method stub
		boolean isTransferred = false;
		Wallet fromWallet = this.walletRepository.getWalletById(id);
		Wallet toWallet = this.walletRepository.getWalletById(toId);
		if (fromWallet == null)
			throw new WalletException("Sender id not found");
		if (toWallet == null)
			throw new WalletException("Receiver wallet id not found");
		if (amount <= 0)
			throw new WalletException("Transfer amount cannot be less than or equal to zero");
		if (fromWallet.getBalance() - amount < 0)
			throw new WalletException("Amount insufficient");
		if (fromWallet.getId() == toWallet.getId())
			throw new WalletException("Wallet id cannot be same");
		fromWallet.setBalance(fromWallet.getBalance() - amount);
		toWallet.setBalance(toWallet.getBalance() + amount);
		this.walletRepository.updateWallet(fromWallet);
		this.walletRepository.updateWallet(toWallet);
		this.wallet = fromWallet;
		isTransferred = true;
		return isTransferred;

	}

	@Override
	public Boolean unregisterWallet(Integer walletId,String password) throws WalletException {
		// TODO Auto-generated method stub
		Wallet deletedWallet = this.walletRepository.getWalletById(walletId);;
		if (deletedWallet == null)
			throw new WalletException("Wallet id not found");
		if (!deletedWallet.getPassword().equals(password))
			throw new WalletException("Password does't match to unregister your account.");
		isdeleted=true;
		return isdeleted;
	}

	@Override
	public Double withdrawFundsFromWallet(Integer walletId,Double amount) throws WalletException {
		// TODO Auto-generated method stub
		Wallet wallet = this.walletRepository.getWalletById(walletId);
		if (wallet == null)
			throw new WalletException("Wallet id not found");
		if (amount <= 0)
			throw new WalletException("Withdraw amount cannot be less than or equal to zero");
		if (wallet.getBalance() - amount < 0)
			throw new WalletException("Amount insufficient");
		wallet.setBalance(wallet.getBalance() - amount);
		this.walletRepository.updateWallet(wallet);
		return wallet.getBalance();

	}
	@Override
	public Wallet getWallet(Integer walletId) throws WalletException {
		// TODO Auto-generated method stub
		Wallet wallet = walletRepository.getWalletById(walletId);
		if (wallet == null)
			throw new WalletException("Wallet id not exist");
		return wallet;

	}

	
}
