import axios from 'axios';

interface basicHeader {
  'Accept' : string
  'Content-Type': string
  'Host': string
  'Authorization'?:string
}


//class for HTTP client
export  class HttpClient {
  baseUrl:string
  private clientId : string
  private clientSecret: string
  private header: basicHeader
  constructor(baseUrl:string){
    this.baseUrl = baseUrl;
    this.clientId = 'QFGjZcIX3ljxrHzaOmU3S6hBIhcg_1gnH2g-nx5YGDI';
    this.clientSecret = "2TjOwyesspn5qvkrtGoO4x5xNIdFLt5d3vKhWZSalUM";
    this.header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Host': 'api.producthunt.com'
    }

  }

  public init():Promise<any>{
    return this.getHeaders(this.header).then((data:any)=>{
      this.header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Host': 'api.producthunt.com',
        'Authorization': `Bearer ${data.data.access_token}`
      };  
    });
  }

  private getHeaders(header:basicHeader): Promise<any>{
    return this.post(`v2/oauth/token`,{
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'client_credentials'
    },
    header)
  }

  public fetchPosts(): Promise<any> {
    return this.get(`v1/posts`,{headers: this.header});
  }


  private createEndPoint(endpoint:string) :string{
    return `${this.baseUrl}/${endpoint}`
  }


  private get(endpoint:string,config:Object):Promise<any>{
    return axios.get(this.createEndPoint(endpoint),config)
  }

  private post(endpoint:string,payload:any,header:any =''): Promise<any>{
      return axios.post(this.createEndPoint(endpoint),payload,header ? header : this.header)
  }

}

export type httpClientProps =  {
  fetchPosts: Function,
  init: Function,

}