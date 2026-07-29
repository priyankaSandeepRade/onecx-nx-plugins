export interface GeneratorStepErrorParameters {
  stopExecution: boolean;
}

export const DEFAULT_ERROR_PARAMETERS: GeneratorStepErrorParameters = {
  stopExecution: false,
};

export class GeneratorStepError extends Error {
  errorParameters: GeneratorStepErrorParameters;

  constructor(message: string, parameters?: GeneratorStepErrorParameters) {
    super(message);
    this.errorParameters = {
      ...DEFAULT_ERROR_PARAMETERS,
      ...parameters,
    };
  }
}
