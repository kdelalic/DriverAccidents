$(document).ready(function() {
	d3.csv("/drivers_in_accidents.csv", function(d) {
		return {
			//drv_rec_type: d.drv_rec_type, //crash level record
			//drv_crsh_id: d.drv_crsh_id, //id of crash
			//drv_unit_num: d.drv_unit_num, //id of traffic unit(cop)
			//drv_invl_prty_key: d.drv_invl_prty_key, //unique id to party
			//drv_prty_type: d.drv_prty_type, //type of party(driver, passenger,ped,etc)
			//drv_prty_brth_date: d.drv_prty_brth_date, //party birthdate
			//drv_prty_age: d.drv_prty_age, //party age
			//drv_pos_cd: d.drv_pos_cd, //position of party
			//drv_rstr_use_cd: d.drv_rstr_use_cd, //safety restraint type
			//drv_ab_depl_cd: d.drv_ab_depl_cd, //airbag deployment
			//drv_prty_ejct_ind: d.drv_prty_ejct_ind, //party was ejected from vehicle
			//drv_prty_trap_ind: d.drv_prty_trap_ind, //party was trapped in vehicle after
			//drv_ambl_cd: d.drv_ambl_cd, //id of agency which transported party
			//drv_hosp_cd: d.drv_hosp_cd, //hospital which involved party
			//drv_driv_licn_num: d.drv_driv_licn_num, //driver's license
			//drv_driv_licn_st: d.drv_driv_licn_st, //driver's license state
			//drv_alch_susp_ind: d.drv_alch_susp_ind, //suspicion of influence of alcohol
			//drv_alch_test_rfsd_ind: d.drv_alch_test_rfsd_ind, //refused alc test
			//drv_drug_susp_ind: d.drv_drug_susp_ind, //suspicion of influence of drugs
			//drv_alch_pbt_test_ind: d.drv_alch_pbt_test_ind, //took preliminary breath test
			//drv_alch_brth_test_ind: d.drv_alch_brth_test_ind, //took breathalyzer test
			//drv_alch_urne_test_ind: d.drv_alch_urne_test_ind, //took urine test
			//drv_alch_blod_test_ind: d.drv_alch_blod_test_ind, //took blood test
			//drv_igil_ind: d.drv_igil_ind, //vehicle equiped with ignition lock
			//drv_hzrd_citn_ind: d.drv_hzrd_citn_ind, //given hazardous citation
			//drv_oth_citn_ind: d.drv_oth_citn_ind, //given citation other that hazardous
			//drv_crnt_x_cord: d.drv_crnt_x_cord, //x coord of crash location
			//drv_crnt_y_cord: d.drv_crnt_y_cord, //y coord of crash location
			//drv_cnty_cd: d.drv_cnty_cd, //traffic crash location system code for county
			//drv_date_val: d.drv_date_val, //date of crash
			//drv_milt_time: d.drv_milt_time, //military time of crash
			//location_1: d.location_1 //x,y coords
			drv_gndr_cd: d.drv_gndr_cd, //party's gender
			drv_injy_svty_cd: d.drv_injy_svty_cd, //injury severity
			drv_hzrd_actn_cd: d.drv_hzrd_actn_cd, //hazardous action which contributed to crash
			drv_alch_test_not_ofrd: d.drv_alch_test_not_ofrd, //test not offered
			drv_alch_feld_test_ind: d.drv_alch_feld_test_ind, //took field test
			drv_alch_test_rslt: d.drv_alch_test_rslt, //test results
			drv_drug_blod_test_ind: d.drv_drug_blod_test_ind, //took blood drug test
			drv_drug_urne_test_ind: d.drv_drug_urne_test_ind, //took urine drug test
			drv_drug_test_rslt: d.drv_drug_test_rslt //drug test results
		};
	}, function(data) {
		var count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		for (i = 0; i < data.length; i++) {
			if (data[i].drv_injy_svty_cd == "1") {
				if (data[i].drv_alch_feld_test_ind == "1") {
					if (+data[i].drv_alch_test_rslt > 0.08) {
						if (data[i].drv_gndr_cd == "M") {
							count[0]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[1]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[2]++;
						} else if (data[i].drv_gndr_cd == "f") {
							count[3]++;
						}
					}
				} else if (data[i].drv_alch_feld_test_ind == "0") {
					count[4]++;
				}
				if (data[i].drv_drug_blod_test_ind == "1" | data[i].drv_drug_urne_test_ind == "1") {
					if (+data[i].drv_drug_test_rslt > 0) {
						if (data[i].drv_gndr_cd == "M") {
							count[5]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[6]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[7]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[8]++;
						}
					}
				} else {
					count[9]++;
				}
			} else if (data[i].drv_injy_svty_cd == "2") {
				if (data[i].drv_alch_feld_test_ind == "1") {
					if (+data[i].drv_alch_test_rslt > 0.08) {
						if (data[i].drv_gndr_cd == "M") {
							count[10]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[11]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[12]++;
						} else if (data[i].drv_gndr_cd == "f") {
							count[13]++;
						}
					}
				} else if (data[i].drv_alch_feld_test_ind == "0") {
					count[14]++;
				}
				if (data[i].drv_drug_blod_test_ind == "1" | data[i].drv_drug_urne_test_ind == "1") {
					if (+data[i].drv_drug_test_rslt > 0) {
						if (data[i].drv_gndr_cd == "M") {
							count[15]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[16]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[17]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[18]++;
						}
					}
				} else {
					count[19]++;
				}
			} else if (data[i].drv_injy_svty_cd == "3") {
				if (data[i].drv_alch_feld_test_ind == "1") {
					if (+data[i].drv_alch_test_rslt > 0.08) {
						if (data[i].drv_gndr_cd == "M") {
							count[20]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[21]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[22]++;
						} else if (data[i].drv_gndr_cd == "f") {
							count[23]++;
						}
					}
				} else if (data[i].drv_alch_feld_test_ind == "0") {
					count[24]++;
				}
				if (data[i].drv_drug_blod_test_ind == "1" | data[i].drv_drug_urne_test_ind == "1") {
					if (+data[i].drv_drug_test_rslt > 0) {
						if (data[i].drv_gndr_cd == "M") {
							count[25]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[26]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[27]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[28]++;
						}
					}
				} else {
					count[29]++;
				}
			} else if (data[i].drv_injy_svty_cd == "4") {
				if (data[i].drv_alch_feld_test_ind == "1") {
					if (+data[i].drv_alch_test_rslt > 0.08) {
						if (data[i].drv_gndr_cd == "M") {
							count[30]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[31]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[32]++;
						} else if (data[i].drv_gndr_cd == "f") {
							count[33]++;
						}
					}
				} else if (data[i].drv_alch_feld_test_ind == "0") {
					count[34]++;
				}
				if (data[i].drv_drug_blod_test_ind == "1" | data[i].drv_drug_urne_test_ind == "1") {
					if (+data[i].drv_drug_test_rslt > 0) {
						if (data[i].drv_gndr_cd == "M") {
							count[35]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[36]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[37]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[38]++;
						}
					}
				} else {
					count[39]++;
				}
			} else if (data[i].drv_injy_svty_cd == "5") {
				if (data[i].drv_alch_feld_test_ind == "1") {
					if (+data[i].drv_alch_test_rslt > 0.08) {
						if (data[i].drv_gndr_cd == "M") {
							count[40]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[41]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[42]++;
						} else if (data[i].drv_gndr_cd == "f") {
							count[43]++;
						}
					}
				} else if (data[i].drv_alch_feld_test_ind == "0") {
					count[44]++;
				}
				if (data[i].drv_drug_blod_test_ind == "1" | data[i].drv_drug_urne_test_ind == "1") {
					if (+data[i].drv_drug_test_rslt > 0) {
						if (data[i].drv_gndr_cd == "M") {
							count[45]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[46]++;
						}
					} else {
						if (data[i].drv_gndr_cd == "M") {
							count[47]++;
						} else if (data[i].drv_gndr_cd == "F") {
							count[48]++;
						}
					}
				} else {
					count[49]++;
				}
			}
		}
		console.log(count);
	})
});