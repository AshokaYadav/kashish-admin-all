export interface ResponseType<T> {
    err: string | null;
    message: string;
    data: T | null;
}
