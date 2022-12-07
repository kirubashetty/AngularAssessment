package com.example.Wallet.dao;


import java.sql.SQLException;

import com.example.Wallet.dto.Wallet;
import com.example.Wallet.exception.WalletException;

public interface WalletDao {
	// CRUD
	Wallet addWallet(Wallet newWallet) throws WalletException;

	Wallet getWalletById(Integer walletId) throws WalletException;

	Wallet updateWallet(Wallet updateWallet) throws WalletException;

	Wallet deleteWalletById(Integer walletID) throws WalletException;
}
