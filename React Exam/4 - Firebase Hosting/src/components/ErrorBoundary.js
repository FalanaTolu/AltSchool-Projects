import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '', errorInfo: '', hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px' }}>
          <h1>Some error don happen.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <p>{this.state.error && this.state.error.toString()}</p>
            <pre>{this.state.errorInfo.componentStack}</pre>
            {console.log(
              `Some error don happen: ${this.state.errorInfo.componentStack}`
            )}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
