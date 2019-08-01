import { map, filter, take } from 'rxjs/operators';
import { BehaviorSubject, timer } from 'rxjs';

const subject = new BehaviorSubject<string>(null);
const obs$ = subject.asObservable();

obs$.pipe(
  filter(x => !!x),
  take(10)
).subscribe(x => console.log(x));

timer(0, 1000).pipe(
  filter(data => data % 2 === 0)
).subscribe(data => {
  subject.next('Hello world ' + data);
});
