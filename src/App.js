
// import logo from './logo.svg';
import './App.css';
// import {Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import MyNav from './components/navBar.jsx';
// import MyForm from './components/form.jsx';
import Welcome from './components/home.js';
import Products from './components/Products';






class Home extends React.Component {

  constructor() {
      super();
      this.state = {
          data: this.data
      }

      this.handleChange = this.handleChange.bind(this);

  }

  data = [
          {id: '1', nombre: 'producto1'},
          {id: '2', nombre: 'producto2'},
          {id: '3', nombre: 'producto3'}
      ];
  
  componentDidMount(){
    let dat;
    const task = new Promise((resolve, reject) =>{
          setTimeout(() => {
              const data2 = [
                  {
                      id: '5',
                      nombre: 'Heladera',
                      precio: '$35000',
                      img: 'https://picsum.photos/200/300?random=1'
                  },
                  {
                      id: '6',
                      nombre: 'Lavarropa',
                      precio: '$31000',
                      img: 'https://picsum.photos/200/300?random=2'
                  },
                  {
                      id: '7',
                      nombre: 'Cocina',
                      precio: '$40000',
                      img: 'https://picsum.photos/200/300?random=3'
                  }
              ]
              resolve(data2);
          }, 3000);
      }
    )

    task.then((res) => {
          dat = res;
          this.handleChange(dat)
          console.log("terminando el montaje con",dat)
    })
  }

  handleChange(dat){
      console.log("estoy por cambiar el estado con:",dat)
      this.setState({ data: dat })
  }



  render(){

      return (
        // <MyNav/>
        // <Welcome name="Matias" />
        //   <div id="form">      
        //     <form>
        //       <div className="form-group">
        //         <label htmlFor="exampleInputEmail1">Email address</label>
        //         <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onInput= {onChangeEmail}/>
        //         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="exampleInputPassword1">Password</label>
        //         <input  type="password" className="form-control" id="exampleInputPassword1" onInput= {onChangePassword}/>
        //       </div>
        
        //     </form>
        
        //     <div>Se realizaron: {contador} Submit</div>
        //     <div>El último fue: {moment} </div>   
        
        <div>
        <MyNav/>        
        <Products products={this.state.data} />
        </div>
      )
      
  }
}

export default Home;