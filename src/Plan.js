import { Component } from "react";
import cute from './cute.avif';

export class Plan extends Component {
    constructor() {
        super()
        
        this.state = {
            userInput : "",
            deedsList: []
        }
    }
    onChangeEvent (e){
        this.setState ( {userInput : e} )
    }
    addItem(input){
        if (input === ''){
            alert('please go to rest')
        } else {
            let listArray = this.state.deedsList;
        listArray.push(input)
        this.setState( {deedsList : listArray, userInput: ''} )
        }
    }
    this(event){
        const li = event.target;
        li.classList.toggle('these');
    }
    deleteItem(){
        let listArray = this.state.deedsList;
        listArray.length = 0;
        this.setState ( {deedsList : listArray} )
    }
    enter(e){
        e.preventDefault();
    }




        render() {
            return(
                <div>
                    <form onSubmit={this.enter} >
                        <div className='cat'>
                        <input type="text" placeholder="Put here something camon" 
                        onChange={ (e) => {this.onChangeEvent (e.target.value) } }
                        value={this.state.userInput}/>
                        </div>


                        <div className="cat">
                            <button onClick={ () => this.addItem(this.state.userInput) } className="btn add"> Add </button>
                        </div>

                        <ul>
                            {this.state.deedsList.map ( (item,index) => (
                                <li onClick={this.this} key={index}>
                                    <img src={cute} width="40px"  alt="cuttie"/>
                                    {item}
                                </li>
                            ) )}
                        </ul>
                        <div className="cat">
                            <button onClick={ () => this.deleteItem() } className="btn del">Delete</button>
                        </div>
                        


                    </form>
                </div>
            )
        }
}