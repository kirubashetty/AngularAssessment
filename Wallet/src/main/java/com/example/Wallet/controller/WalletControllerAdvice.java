package com.example.Wallet.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.Wallet.exception.WalletException;

@RestControllerAdvice
public class WalletControllerAdvice {

	@ExceptionHandler(value={WalletException.class})
	@ResponseStatus(code = HttpStatus.BAD_REQUEST)	
	public String walletExceptionHandler(WalletException e) {
		HttpStatus status=HttpStatus.BAD_REQUEST;
		return e.getMessage();
	}
}
