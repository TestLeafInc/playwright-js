import { EnvConstants } from "../constants/envConstants";
import appData from "../test-data/appData.json"

type appData ={
    adminUserName:string;
    adminPassword:string;

}
export class FrameworkHelper{

    //to load the test data based on which environment
   
    static loadTestData(envName:EnvConstants):appData{

        return appData[envName]; //applicationData[envName]

    }


}