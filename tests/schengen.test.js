const S=require('../assets/schengen.js');const a=require('assert');
// 90 consecutive days from Jan 1
let set=S.daySet([{entry:'2026-01-01',exit:'2026-03-31'}]); // 90 days
a.equal(set.size,90); a.equal(S.usedOn(set,S.toDay('2026-03-31')),90);
a.deepEqual(S.overstayDays(set),[]);
// cannot enter on Apr 1
a.equal(S.maxStayFrom(set,S.toDay('2026-04-01')),0);a.equal(S.maxStayFrom(set,S.toDay('2026-06-29')),0);
// Jan1 drops out of window on day Jan1+180 = Jun 30
a.equal(S.toIso(S.toDay('2026-01-01')+180),'2026-06-30');
a.equal(S.maxStayFrom(set,S.toDay('2026-06-30')),90);
// earliest 10-day trip
const e=S.earliestStartFor(set,10,S.toDay('2026-04-01'));console.log('earliest10',S.toIso(e), S.maxStayFrom(set,e));
// 91 days -> overstay
let s2=S.daySet([{entry:'2026-01-01',exit:'2026-04-01'}]);a.equal(S.overstayDays(s2).length,1);
// empty: max 90
a.equal(S.maxStayFrom(new Set(),S.toDay('2026-11-01')),90);
a.equal(S.toDay('2026-02-30'),null);
console.log(S.validateTrips([{entry:'2026-01-05',exit:'2026-01-01'},{entry:'2026-02-01',exit:'2026-02-10'},{entry:'2026-02-05',exit:'2026-02-12'}]));
console.log('ok');
// maximise
{
  const m=S.maximise(new Set(), S.toDay('2027-01-01'), S.toDay('2027-12-31'), 1);
  const all=new Set(); m.trips.forEach(t=>{for(let d=t.entry;d<=t.exit;d++) all.add(d)});
  a.equal(S.overstayDays(all).length,0); a.ok(m.total>=180 && m.total<=186, 'total '+m.total);
  const past=S.daySet([{entry:'2026-12-01',exit:'2026-12-31'}]);
  const m2=S.maximise(past, S.toDay('2027-01-01'), S.toDay('2027-06-30'), 14);
  const all2=new Set(past); m2.trips.forEach(t=>{a.ok(t.days>=14);for(let d=t.entry;d<=t.exit;d++) all2.add(d)});
  a.equal(S.overstayDays(all2).length,0);
  console.log('maximise', m.total, m.trips.length, m2.total, m2.trips.map(t=>S.toIso(t.entry)+'+'+t.days).join(' '));
}
