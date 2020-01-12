import axios from 'axios';

interface basicHeader {
  'Accept' : string
  'Content-Type': string
  'Authorization'?:string
}


//class for HTTP client
export  class HttpClient {
  baseUrl:string
  private clientId : string
  private clientSecret: string
  private header: basicHeader
  constructor(baseUrl:string){
    console.log(localStorage.getItem('bearerToken'),'lol');
    this.baseUrl = baseUrl;
    this.clientId = 'QFGjZcIX3ljxrHzaOmU3S6hBIhcg_1gnH2g-nx5YGDI';
    this.clientSecret = "2TjOwyesspn5qvkrtGoO4x5xNIdFLt5d3vKhWZSalUM";
    this.header = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('bearerToken')? `Bearer ${localStorage.getItem('bearerToken')}` : ''
    }

  }

  public init():Promise<any>{
    return this.getHeaders(this.header).then((data:any)=>{
      this.header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.data.access_token}`
      };  
      return data.data.access_token
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

  public fetchPosts(day:string=''): Promise<any> {
    return this.get(`v1/posts?day=${day}`,{headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('bearerToken')}`
    }})
  }

  public fetchComments(data:any) {
    let {
      postId,
      pageNo
    } = data;
    let postIdCropped = postId.substr(0,6);
    return this.get(`v1/comments?search[post_id]=${postIdCropped}&per_page=5&page=${pageNo}`,{headers: this.header});
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
  fetchComments: Function
}
