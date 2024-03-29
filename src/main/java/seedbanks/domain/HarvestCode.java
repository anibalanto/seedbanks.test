package seedbanks.domain;


import java.io.UnsupportedEncodingException;
import java.util.concurrent.atomic.AtomicLong;
import java.util.ArrayList;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class HarvestCode {
	private String uHarvestID;
	private String harvestCodeValidator;

	//TODO luego tiene que ser reemplazado por un valor en al base de datos
	private final AtomicLong counter = new AtomicLong();

	
	public static byte[] hexStringToByteArray(String s) {
		int len = s.length();
		byte[] data = new byte[len/2];
		for (int i = 0; i < len; i += 2) {
			data[i/2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
								+ Character.digit(s.charAt(i+1), 16));
		}
		return data;
	}
	
	private String generateHarvestCodeValidator(String uFarmerID,
			String uVarietyID, String harvestCodeValidatorAnt) {
		byte[] uFarmerIDBytes = this.hexStringToByteArray(uFarmerID);
		byte[] uVarietyIDBytes = this.hexStringToByteArray(uVarietyID);
		
		byte[] harvestCodeValidatorAntBytes = this.hexStringToByteArray(harvestCodeValidatorAnt);
		
		byte[] harvestCodeValidatorBytes = new byte[4];
		
		int i = 0;
		for (byte uFarmerIDByteI : uFarmerIDBytes){
			harvestCodeValidatorBytes[i] = (byte) (uFarmerIDByteI ^ uVarietyIDBytes[i] ^ harvestCodeValidatorAntBytes[i]);
			i++;
		}
		
		StringBuilder sb = new StringBuilder();
		for (byte b : harvestCodeValidatorBytes) {
			sb.append(String.format("%02X ", b));
		}
		Logger log = LoggerFactory.getLogger(HarvestCode.class);
		log.debug("por aca pase");
		return sb.toString().replace(" ", "");
	}
	
	/*private String generateHarvestCodeValidator(String uFarmerID,
			String uVarietyID) {
		byte[] uFarmerIDBytes = this.hexStringToByteArray(uFarmerID);
		byte[] uVarietyIDBytes = this.hexStringToByteArray(uVarietyID);
		byte[] harvestCodeValidatorAntBytes = new byte[4];
		
		new Random().nextBytes(harvestCodeValidatorAntBytes);
		
		byte[] harvestCodeValidatorBytes = new byte[4];
		
		int i = 0;
		for (byte uFarmerIDByteI : uFarmerIDBytes){
			harvestCodeValidatorBytes[i] = (byte) (uFarmerIDByteI ^ uVarietyIDBytes[i] ^ harvestCodeValidatorAntBytes[i]);
			i++;
		}
		
		StringBuilder sb = new StringBuilder();
		for (byte b : harvestCodeValidatorBytes) {
			sb.append(String.format("%02X ", b));
		}
		
		Logger log = LoggerFactory.getLogger("hola mama");
		log.debug("por aca pase");
		return "CCCCCCCC";//sb.toString().replace(" ", "");
	}*/

	private String generateUHarvestId(String uFarmerID, String uVarietyID,
			int intValue) {
		// TODO Auto-generated method stub
		return uFarmerID + "/" + uVarietyID + "/" + intValue;
	}
	
	public String getUHarvestID() {
		return uHarvestID;
	}

	public String getHarvestCodeValidator(String uFarmerID, String uVarietyID, Harvest mother) {
		String harvestCodeValidatorAnt;
		if (mother == null){
			harvestCodeValidatorAnt = "00000000";
		}else{
			harvestCodeValidatorAnt = mother.getCodeValidator();
		}
		
		return this.generateHarvestCodeValidator(uFarmerID, uVarietyID, harvestCodeValidatorAnt);
	}
}

