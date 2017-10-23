export interface PickerOptions {
    type?: string;
    title?: string;
    theme?: string;
    maxDate?: Date;
    minDate?: Date;
    startingDate?: Date;
}
export interface PickerResponse {
    day?: number;
    month?: number;
    year?: number;
    hour?: number;
    minute?: number;
} 
export declare class ModalDatetimepicker {
    constructor();
    pickDate(options?: PickerOptions): Promise<{}>;
    pickTime(options?: PickerOptions): Promise<{}>;
    private show(options);
    chooseDate(): void;
    chooseTime(): void;
    close(response?: any): void;
}
