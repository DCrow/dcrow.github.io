---
layout: post
title:  "Initial post"
date:   2024-06-20 09:20:15 +0300
categories: initial
---

Hoping this will be a goods place to preserve and sort out my thoughts on various new libraries that I am trying out.

As this is the first post lets talk about setting this blog with [`jekyll`](https://jekyllrb.com/).

As a first time user it was very easy to set up.<br>
Mostly everything worked out of the box, except...<br>
after booting up lots of warnings appeared.
{% highlight bash %}
Deprecation Warning: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.

Recommendation: math.div($spacing-unit, 2) or calc($spacing-unit / 2)

More info and automated migrator: https://sass-lang.com/d/slash-div

   ╷
40 │   margin-bottom: $spacing-unit / 2;
   │                  ^^^^^^^^^^^^^^^^^
   ╵
    ../../../../minima-2.5.1/_sass/minima/_base.scss 40:18        @import
    minima.scss 48:3                                              @import
{% endhighlight %}

Fortunately to resolve it, I just needed to change the current version of `minima` to point to the latest version on github.

From
{% highlight ruby %}
gem "minima", "~> 2.5"

{% endhighlight %}

to 

{% highlight ruby %}
gem "minima", github: "jekyll/minima", ref: "1d5286c"
{% endhighlight %}

Secondly I had to put a `favicon.png` at the root of the project since my browser was giving a 404 error in the console.<br>
Thirdly I changed `layout` in `404.html` from `default` to `post` since jekylls builder was complaining about it.

Now everything was working without any warnings, and I could focus on changing jekylls defaults to my needs and writing this post.
Which if you are reading now is finished!<br>
***


All in all I think `jekyll` is very nice blogging tool which doesn't require much and is easy to use, especially for ruby developers.
