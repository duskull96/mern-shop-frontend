import { connect } from 'react-redux'
import { fetchCatalogPageCreator } from '../../../../store/reducers/catalogPageReducer'
import List from './List.js'

const mapStateToProps = (state) => {
    return {
        catalog : state.catalogPageReducer.catalog
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCatalog: () => {
            dispatch(fetchCatalogPageCreator()) 
        }
    }
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List)

export default ListContainer;