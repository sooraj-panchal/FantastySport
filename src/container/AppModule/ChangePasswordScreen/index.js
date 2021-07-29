import { connect } from 'react-redux';
import { resetPasswordSuccess, resetPasswordWatcher } from '../../../store/actions';
import { resetPasswordLoading, resetPasswordSelector } from '../../../store/selectors';
import ChangePasswordScreen from './view';


const mapStateToProps = store => {
    return {
        resetPasswordResponse:resetPasswordSelector(store),
        resetPasswordLoading:resetPasswordLoading(store)
    }
}

const mapDispatchToProps = {
    resetPasswordWatcher,
    resetPasswordSuccess
};
export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordScreen)