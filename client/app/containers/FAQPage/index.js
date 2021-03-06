/** *********
 *
 * FAQPage
 *
 *********** */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import withStyles from '@material-ui/core/styles/withStyles';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectFAQ, makeSelectLoading } from './selectors';
import * as mapDispatchToProps from './actions';
import reducer from './reducer';
import saga from './saga';
import Loading from '../../components/Loading';

const styles = {};

class FAQPage extends React.Component {
  static propTypes = {
    loadFAQRequest: PropTypes.func.isRequired,
    faq: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      expanded: 'panel1',
      qExpanded: '',
    };
  }

  componentDidMount() {
    this.props.loadFAQRequest();
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleQChange = panel => (event, expanded) => {
    this.setState({
      qExpanded: expanded ? panel : false,
    });
  };

  render() {
    const { faq, classes, loading } = this.props;

    const { expanded, qExpanded } = this.state;

    return loading && loading == true ? (
      <Loading />
    ) : (
        <div>
          <Helmet>
            <title> FAQs </title>
          </Helmet>
          <div className="bg-star h-48 relative text-center py-12">
            <h1 className="text-4xl mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-700">
              feel free to visit answers you looking for.
          </p>
          </div>
          <div className="my-10 max-w-xl mx-auto">
            {faq.cat &&
              faq.cat.map(
                x =>
                  faq.faq &&
                  faq.faq.filter(z => z.category == x._id).length !== 0 && (
                    <div key={`cat-${x._id}`} className="mb-6">
                      <h2 className="text-xl font-bold">{x.title}</h2>
                      <AccordionDetails style={{ display: 'block', paddingLeft: 0 }}>
                        {faq.faq &&
                          faq.faq
                            .filter(z => z.category == x._id)
                            .map(y => (
                              <Accordion
                                className={classes.FAQPanel}
                                key={`faq-${y._id}`}
                                expanded={qExpanded === y._id}
                                onChange={this.handleQChange(y._id)}
                              >
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel2a-content"
                                  id="panel2a-header"
                                >
                                  <p className="text-base">{y.question}</p>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <p className="text-base">{y.title}</p>
                                </AccordionDetails>
                              </Accordion>
                            ))}
                      </AccordionDetails>
                    </div>
                  ),
              )}
          </div>
        </div>
      );
  }
}

const withReducer = injectReducer({ key: 'faq', reducer });

const withSaga = injectSaga({ key: 'faq', saga });

const mapStateToProps = createStructuredSelector({
  faq: makeSelectFAQ(),
  loading: makeSelectLoading(),
});
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withStyle = withStyles(styles);
export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle,
)(FAQPage);
