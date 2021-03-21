// @flow
export type TExampleState = {|
    example: TExampleStore,
|};

export type TExampleStore = {|
    data: TExampleData,
    list: string[],
|};

export type TExampleData = {|
    [string]: TExample,
|};

export type TExample = {|
    [string]: string,
|};
