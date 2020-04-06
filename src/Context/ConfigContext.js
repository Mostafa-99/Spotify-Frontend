import React, {createContext, Component} from 'react'

export const ConfigContext= createContext();

class ConfigContextProvider extends Component {
    
    state={
        baseURL:'http://138.91.114.14'
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