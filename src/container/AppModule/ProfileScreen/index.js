import { connect } from 'react-redux';
import { asyncBuyerDataWatcher, resetPasswordSuccess, resetPasswordWatcher } from '../../../store/actions';
import { resetPasswordLoading, resetPasswordSelector } from '../../../store/selectors';
import ProfileScreen from './view';


const mapStateToProps = store => {
    return {
        resetPasswordResponse:resetPasswordSelector(store),
        resetPasswordLoading:resetPasswordLoading(store)
    }
}

const mapDispatchToProps = {
    asyncBuyerDataWatcher
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)