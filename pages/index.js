import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { actions, makeStore } from '../src/store';
import { PageFrame } from '../src/components/shared';
import { BlogWrapper, ContentSection, HeaderSection } from '../src/components/blog';

class IndexPage extends Component {
  static async getInitialProps({ store }) {
    // TODO: Prevent multiple unnecessary fetches when navigating between pages.
    console.log('IndexPage: getInitialProps'); // eslint-disable-line no-console
    store.dispatch(actions.setRouteName('index'));
    await Promise.all([
      store.dispatch(actions.fetchSiteMeta()),
      store.dispatch(actions.fetchTheme()),
    ]);
    return {};
  }

  render() {
    return (
      <PageFrame>
        <BlogWrapper>
          <HeaderSection />
          <ContentSection />
        </BlogWrapper>
      </PageFrame>
    );
  }
}

export default withRedux(makeStore)(IndexPage);
