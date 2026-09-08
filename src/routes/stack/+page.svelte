<section>
    <h1>My website setup</h1>
    <p>
        At the time of writing, I host all my projects on Github Pages. This is nice
        for stability and ease of use, but doesn't let me do dynamic pages. Since
        SvelteKit does dynamic websites and GHP can't distinguish between static
        Sveltekit and dynamic Sveltekit easily I also have to do a weird prerender
        thing to get it to work on GHP, which works fairly well but is annoying to
        set up.
    </p>
    <p>
        I'm planning to run my own home server at some point in the near future,
        which would let me host dynamic websites without outsourcing to other
        companies like Netlify or Vercel, which I'd like to avoid (GHP is fine with
        me since I use Github anyways, but I'd like to keep my number of depencencies
        manageable).
    </p>
</section>
<section>
    <h1>Typescript weirdness</h1>
    <p>
        Many of my "smaller", more focused projects are made in simple, static HTML.
        I like not having a folder full of build files, and as long as I only need
        one page for the app static HTML is the easiest solution in my opinion. But I
        still want to use typescript (for obvious reasons), so what I've ended up
        doing is have an eslint job in VSCode watching my .ts files and re"compiling"
        every time I save. This also has the effect of pushing all the generated code
        into a single file, and I could probably get it to minify it as well if I
        wanted. It duplicates all the code and it only works when using VSCode or
        VSCodium, but it works well enough for me.
    </p>
    <p>
        This is also currently my preferred way to write mockups and prototypes,
        rather than python or some other language. I used to use Unity/C# for this,
        but the overhead was annoying and the ease of writing Typescript has won me
        over. It also lets me host any projects online if I feel like it without
        having to rewrite everything.
    </p>
</section>
<section>
    <h1>Domain</h1>
    <p>
        My domain is registered at Oderland, a registrar based in Gothemburg. They
        also do hosting, SMTP and various other web services, but I only use them for
        the domain.
    </p>
    <p>
        I thought for a bit about whether I wanted a .se or .com domain, but
        eventually I landed on .se. There were a few reasons for that, but mainly I
        chose it because the organization that manages these is nicer than the .com
        one. They also have a maximum price for the domain, so while the "rent" on a
        .com domain could theoretically rise arbitrarily high (on every registrar,
        since there's a central company which decides on the amount of money they
        want per domain name which sets a price floor for the registrars),
        .se-domains are more limited.
    </p>
</section>
