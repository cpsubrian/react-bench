Comparing Handlebars Rendering to React
=======================================

Some naive benchmarks.

Baseline (404 handler)
----------------------

Serving a simple string (html).

```
$ wrk -c 20 -r 50000 -t 4 http://localhost:3000
Making 50000 requests to http://localhost:3000
  4 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.98ms   59.07us   1.42ms   92.54%
    Req/Sec     4.85k   359.03     5.00k    85.07%
  50000 requests in 2.46s, 14.21MB read
  Non-2xx or 3xx responses: 50000
Requests/sec:  20349.61
Transfer/sec:      5.78MB
```

Handlebars
----------

Serving a precompiled handlebars-template.

```
$ wrk -c 20 -r 50000 -t 4 http://localhost:3000/handlebars
Making 50000 requests to http://localhost:3000/handlebars
  4 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.02ms   81.48us   1.55ms   95.59%
    Req/Sec     4.00k     0.00     4.00k   100.00%
  50000 requests in 2.58s, 14.88MB read
Requests/sec:  19414.63
Transfer/sec:      5.78MB
```

Compiling for every request (not sure why you would ever do this).

```
$ wrk -c 20 -r 50000 -t 4 http://localhost:3000/handlebars
Making 50000 requests to http://localhost:3000/handlebars
  4 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.83ms  706.78us   8.98ms   90.45%
    Req/Sec   783.44    412.56     1.00k    78.34%
  50000 requests in 11.98s, 14.88MB read
Requests/sec:   4173.81
Transfer/sec:      1.24MB
``


React
-----

First stab at server-side React rendering.

```
$ wrk -c 20 -r 50000 -t 4 http://localhost:3000/react
Making 50000 requests to http://localhost:3000/react
  4 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    11.09ms    3.27ms  33.62ms   88.34%
    Req/Sec     0.00      0.00     0.00    100.00%
  50000 requests in 26.97s, 23.06MB read
Requests/sec:   1853.80
Transfer/sec:      0.85MB
```

