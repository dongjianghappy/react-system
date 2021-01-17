import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {channel, getQuery, date, datetime } from '@/utils/function'
import dispatchToProps from '@/store/dispatch/fnction'
import { checkButtonAuth } from '@/utils/auth'
import authorized from '@/static/constant/authorized'
import codings from '@/static/constant/coding'

debugger

export  {
    connect,
    Link,
    withRouter,
    channel,
    getQuery,
    date,
    datetime,
    dispatchToProps,
    checkButtonAuth,
    authorized,
    codings
};
  