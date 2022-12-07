package com.example.Wallet.dto;

public class LoginDto {
	
	@Override
	public String toString() {
		return "LoginDto [id=" + id + ", password=" + password + "]";
	}
	private Integer id;
	private String password;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
