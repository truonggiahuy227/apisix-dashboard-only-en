export function once(n){const t=this;let e,o=!1;return function(){return o||(o=!0,e=n.apply(t,arguments)),e}}