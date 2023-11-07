import React from "react";
import { Button } from "antd";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, Something went wrong</h1>
          <Button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;