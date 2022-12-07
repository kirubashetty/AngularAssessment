package com.example.Wallet.service;

import com.example.Wallet.dto.Wallet;
import com.example.Wallet.exception.WalletException;

public interface WalletService {

    Wallet registerWallet(Wallet newWallet) throws WalletException;
    Boolean login(Integer walletId, String password) throws WalletException;
    Double addFundsToWallet(Integer walletId, Double amountToAdd) throws WalletException;
    Double showWalletBalanceById(Integer walletId) throws WalletException;
    Boolean fundTransfer(Integer fromId, Integer toId, Double amount) throws WalletException;
    Boolean unregisterWallet(Integer walletId, String password) throws WalletException;
    Double withdrawFundsFromWallet(Integer walletId, Double amountToWithdraw) throws WalletException;
    Wallet getWallet(Integer walletId) throws WalletException;
}
