import React, { Component } from "react";

class ListMakanan extends Component{
constructor(props){
    super(props);
        this.state = {
            DataList: this.props.MenuMakan
            //state berisikan props yang akan ditampilkan di MenuMakanan

        }
    
}
render(){
    return(
        <div>
           <img src={this.state.DataList} alt="product makanan" width="150"/>
           {/* props berisikan state yang berupa link pada MenuMakanan */}
        </div>
    )
}
}
export default ListMakanan
