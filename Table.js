import React from "react";
import { Text } from "react-native";

 class Table extends React.PureComponent {
 constructor(props){
    super(props);
    this.state = {
        isBig : false
    }
 }

   changeState = () => {
    this.setState({isBig : !this.state.isBig})
   }

    render() {
        return(
            <Text style = {{fontSize : this.state.isBig ? 24 : 16}} onPress={this.changeState}> inside the Table</Text>
        )
    }
}

export default Table;