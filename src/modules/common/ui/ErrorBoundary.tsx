import { Component, ErrorInfo, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type TState = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<TProps, TState> {
  state: TState = {
    error: null,
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): TState {
    return {
      error,
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div>
            <h2>Something went wrong</h2>
            <p>{this.state.error?.message}</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
