import React, {createContext, Component} from 'react'

export const ConfigContext= createContext();

class ConfigContextProvider extends Component {
    
    state={
        baseURL:'http://localhost:3004'
    }
    

    render(){
        return(
            <ConfigContext.Provider value={{...this.state}}>
                {this.props.children}
            </ConfigContext.Provider>
        ); 

        
    }

}

export default ConfigContextProvider;