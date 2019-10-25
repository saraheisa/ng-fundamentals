import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
    success(message: String, title?: String) {
        toastr.success(message, title);
    }
    error(message: String, title?: String) {
        toastr.error(message, title);
    }
    info(message: String, title?: String) {
        toastr.info(message, title);
    }
    warning(message: String, title?: String) {
        toastr.warning(message, title);
    }
}
