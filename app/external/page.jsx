'use client';

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function External() {
  const [state, setState] = useState({ isLoading: false, response: undefined, error: undefined });

  const callApi = async () => {
    setState(previous => ({ ...previous, isLoading: true }));

    try {
      const response = await fetch('/api/shows');
      const data = await response.json();

      setState(previous => ({ ...previous, response: data, error: undefined }));
    } catch (error) {
      setState(previous => ({ ...previous, response: undefined, error }));
    } finally {
      setState(previous => ({ ...previous, isLoading: false }));
    }
  };

  const handle = (event, fn) => {
    event.preventDefault();
    fn();
  };

  const { isLoading, response, error } = state;

  return (
    <>
      <div className="mb-5" data-testid="external">
        <h1 data-testid="external-title">Biomarkers</h1>
        <div data-testid="external-text">
          <p className="lead">See your personalized blood panel and reach out to one of our physicians for questions.</p>
        </div>
        <h3 data-testid="external-title">Biomarkers</h3>
        <h3 data-testid="external-title">Status</h3>
        <h6 data-testid="external-title">Biometrics</h6>
        <h6 data-testid="external-title">Cholesterol Panel</h6>
        <h6 data-testid="external-title">Metabolic Profile</h6>
        <h6 data-testid="external-title">Blood Profile</h6>
        <h6 data-testid="external-title">Inflammation Panel</h6>
        <h6 data-testid="external-title">Liver Function</h6>
        <h6 data-testid="external-title">Kidney Profile</h6>
        <h6 data-testid="external-title">Vitamins & Minerals</h6>
        <h6 data-testid="external-title">Blood Profile</h6>
        <h6 data-testid="external-title">Hormone Panel</h6>
        <h6 data-testid="external-title">Cancer Screening</h6>
        <h6 data-testid="external-title">Urine Analysis</h6>
      </div>
      <div className="result-block-container">
        {isLoading && <Loading />}
        {(error || response) && (
          <div className="result-block" data-testid="external-result">
            <h6 className="muted">Result</h6>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
            {response && <Highlight>{JSON.stringify(response, null, 2)}</Highlight>}
          </div>
        )}
      </div>
    </>
  );
}

export default withPageAuthRequired(External, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
