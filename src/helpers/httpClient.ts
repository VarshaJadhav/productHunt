import axios from 'axios';

interface requestHeader {
  access_token : string,
  token_type: string,
  scope: string
}

class HttpClient {
  baseUrl:string
  private clientId : string
  private header: 
  constructor(baseUrl:string){
    this.baseUrl = baseUrl;
    this.clientId = 'productHuntHaptik';
  }

  private createClientSecretes(){
    return Math.floor(1000000000000000 + Math.random() * 9000000000000000)
    .toString(36).substr(0, 10);
  }

  private createEndPoint(endpoint:string) :string{
    return `${this.baseUrl}/${endpoint}`
  }


  public post(endpoint:string,payload:any): any{
      axios.post(this.createEndPoint(endpoint),payload,this.setHeader())
  }

}