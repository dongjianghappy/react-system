import { getListAction } from '../action'

const dispatchToProps = (dispatch) => {

    return {
        inputChange(page = 0, pagesize = 10) {
            const action = getListAction({
              coding: 'K0002',
              page: 0,
              pagesize: 10
            })
            dispatch(action)
        }
    }
  }

  export default dispatchToProps