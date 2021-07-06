import { connect } from 'react-redux'
import { fetchMainPageCreator } from '../../store/reducers/mainPageReducer.js'

import Main from './Main.js'

const mapStateToProps = (state) => {
    return {
        main : state.mainPageReducer.main
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMain: () => {
            dispatch(fetchMainPageCreator()) 
        }
    }
}


const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer;