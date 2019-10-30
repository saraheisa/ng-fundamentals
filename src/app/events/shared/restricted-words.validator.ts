import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
    return function(formControl: FormControl): { [key: string]: any } {
        if (!words) { return null; }

        const invalidWords = words.map(w => formControl.value.includes(w) ? w : null).filter(w => w != null);

        return invalidWords && invalidWords.length > 0
                ? { 'restrictedWords': invalidWords.join(', ') }
                : null;
    };
}
