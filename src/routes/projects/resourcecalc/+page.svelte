<script>
    import Footnote from "$lib/components/Footnote.svelte";
    import LinkWithIcon from "$lib/components/LinkWithIcon.svelte";
</script>

<section>
    <h1>Resource Calculator</h1>
    <p>
        This is a program intended to help calculate resource flow in various games.
        You can add converters, which then add and remove resources. You can then
        play around with different amounts or different settings for the converters
        and try to find a combination that's resource positive where it's important.
        All the internals of the program use rational numbers, since floating point
        arithmetic played very badly with some of the fractions in the data. In
        total, it took about 5 months of on-and-off work<Footnote
            >The first commit was at the start of May 2026, but I worked on it a bit
            before making a repo as well. I didn't do that much during the summer, so
            I guess maybe 3 months of constant work is a good estimate.</Footnote
        > to finish, about 4 of those were dedicated to data entry and related program
        changes.
    </p>
    <p>
        It's made to work well with multiple different datasets. To test this I
        entered data for both Mindustry and Oxygen Not Included. Mindustry was the
        easier of the two, I didn't need settings, <code>OR</code> nodes or anything like
        that, whereas ONI required fairly complicated maths, loads of different types
        of settings, converter templates, formatted display names, nested choices, converters
        which ate other converters and all sorts of other things. But it was quite fun
        to expand on previous systems, rewrite large parts of my code to be more stable
        and expandable, and generally working within a preexisting codebase.
    </p>
    <p>Links:</p>
    <LinkWithIcon
        src="/icons/resourcecalc.svg"
        href="https://resourcecalc.khenr.se/oxygennotincluded"
        target="_blank">Resource calculator - Oxygen Not Included</LinkWithIcon
    >
    <LinkWithIcon
        src="/icons/resourcecalc.svg"
        href="https://resourcecalc.khenr.se/mindustry"
        target="_blank">Resource calculator - Mindustry</LinkWithIcon
    >
    <LinkWithIcon
        href="https://github.com/k-henr/resource-calc"
        src="/icons/github.svg"
        target="_blank"
    >
        Github repository
    </LinkWithIcon>
</section>
