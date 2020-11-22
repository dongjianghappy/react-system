import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import dispatchToProps from '@/store/dispatch/fnction'
import { checkButtonAuth } from '@/utils/auth'
import authorized from '@/static/constant/authorized'
import codings from '@/static/constant/coding'

debugger

export  {
    connect,
    Link,
    withRouter,
    dispatchToProps,
    checkButtonAuth,
    authorized,
    codings
};
  