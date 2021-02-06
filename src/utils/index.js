import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import CountUp from "react-countup";
import {channel, getQuery, date, datetime, jsonLength, requestInit } from '@/utils/function'
import dispatchToProps from '@/store/dispatch/fnction'
import { checkButtonAuth } from '@/utils/auth'
import authorized from '@/static/constant/authorized'
import codings from '@/static/constant/coding'

export  {
    connect,
    Link,
    withRouter,
    CountUp,
    channel,
    getQuery,
    date,
    datetime,
    jsonLength,
    requestInit,
    dispatchToProps,
    checkButtonAuth,
    authorized,
    codings
};
  