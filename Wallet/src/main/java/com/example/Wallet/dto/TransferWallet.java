package com.example.Wallet.dto;

public class TransferWallet {
	@Override
	public String toString() {
		return "TransferWallet [toId=" + toId + ", amount=" + amount + ", id=" + id + "]";
	}
	private Integer toId;
	private Double amount;
	private Integer id;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public TransferWallet() {
		super();
	}
	
	public Integer getToId() {
		return toId;
	}
	public void setToId(Integer toId) {
		this.toId = toId;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}

}
