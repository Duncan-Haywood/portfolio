import React from 'react';

// The color scheme is chosen by the number, looping. 
// I.e. the scheme is not random.
// 
// But the order and which colors inside are then used randomly by elements.
// Note: If there are too few colors in the array, 
// it is likely the same color may get chosen.
// 
// For contrast, works best when very bright or dark colors are chosen.

export const COLOR_SCHEMES = [
	// First array are dark colors.
	// Second array are light colors.
	// Third array are random colors.
	[ [ '#aa3f00' ], [ '#faffc4' ], 
		[ '#aa3f00', '#eb9b00', '#83006f', '#b30074', '#ffd32a' ], ],

	[ [ '#2d7a00' ], [ '#efffc2' ], 
		[ '#389c00', '#a8ab00', '#da4800', '#ffbc07', '#e3ff94' ], ],

	[ [ '#ff9f60' ], [ '#00113c' ], 
		[ '#ff9f60', '#fff923', '#ff9a03', '#4a3800', '#9afdff' ], ],

	[ [ '#1115ff' ], [ '#fffab9' ], 
		[ '#1115ff', '#1294ff', '#11ffd0', '#fffab9', '#008ec4' ], ],

	[ [ '#6a26ff' ], [ '#bcfffe' ], 
		[ '#ff6be5', '#b777ff', '#ff15f5', '#6a26ff', '#53a4ff' ], ],

	[ [ '#470064' ], [ '#ecffc7' ], 
		[ '#470064', '#001559', '#1e003f', '#1900e1', '#ecffc7' ], ],
]

//this is the text displayed on the home page of the application.
export const INTRO = (
	<>
		<p><strong>Welcome!</strong>{" "}
			Thank you so much for visiting; 
			 It means a lot to me that you're engaging in my passions.
			 </p>
		<p>This is one of my first large scale projects that I have hosted. 
			 And, if you'd like to check,
			 I'll be sharing more art projects here over time.
			 </p>
		<p> Sincerely,{" "} 
			<a href="https://www.linkedin.com/in/duncanhaywood">
				Duncan Haywood</a>.
			</p>
	</>
);

// these are the quotes that are shown on each page of the application
export const HEURISTICS = [
	<>
		<p>This project was built by the amazing {" "}
			<a href="http://moc.co">Joen</a> {" "}
			who shared this {" "}
			<a href="https://github.com/jasmussen/turtleshell">project</a> {" "}
			as open source.</p>
		<p>The rest of these pages have some cool animations and quotes 
			 created by Joen.</p>
	</>,
	<blockquote>
		<p>If you want to count the stars in the sky,
			{" "}just start counting.</p>
		<cite>— Selma, age 6</cite>
	</blockquote>,
	<p>Be careful to not get caught up chasing someone else's dream.
		{" "}It's probably a distraction from 
		{" "}what really gets you up in the morning.</p>,
	<p>You can do amazing things. Just not all at once. 
		But don't let this discourage you from accomplishing 
		what's under your control. </p>,
	<p>Good design has gravity. The more you work on it, 
		the more gravity it gets. 
		At some point, the pieces start falling into place on their own.</p>,
	<p>The best design is invisible. It is functional to the point that 
		you forget how it works, you just use it. You might even forget 
		it took effort to invent once upon a time. Such it is: 
		if you do things right, 
		people won't know you've done anything at all. </p>,
	<p>When working on difficult designs, it's important to believe that 
		answers are out there, that finding them is a matter of time and effort 
		rather than hope and random chance. Keep exploring until the fog lifts, 
		and eventually answers will present themselves.</p>,
	<p><a href="https://pages.wustl.edu/DC175/incomplete-manifesto-growth">
		Bruce Mau says</a>: 
		begin anywhere. Depending on the complexity of the project, 
		you might want to start with what is easiest or 
		indeed what is hardest.</p>,
	<p>Talk alone does not move mountains. 
		You can suggest moving the mountain is a priority. 
		You can suggest that without a clear plan for moving the mountain, 
		the project is never going to get off the ground. 
		All of that may be true and agreed upon. 
		But none of that is actually going to move the mountain. 
		Sometimes you just have to grab a shovel and a wheelbarrow
		 and start working.</p>,
	<>
		<p>Every <strong>thing</strong> around you is made by someone. 
			Which means it can be made better still.</p>
		<p>It also means unless you're willing to make it better, 
			it's likely going to stay the way it is.</p>
	</>,
	<>
		<p>Ideas are a renewable resource. Spend them as you get them, 
			don't save them for rainy days.</p>
		<p>Besides, they have a tendency to be brittle 
			when meeting with reality. 
			Ideas are rarely as valuable as you might think.</p>
	</>,
	<p>Whitespace has intrinsic value, both in design and in life. 
		As you work to free up space, be mindful that 
		the newly reclaimed land isn't immediately consumed by something else 
		swooping in to fill the void. Radiohead and Marie Kondo both agree: 
		strive to put everything in it's right place.</p>,
	<>
		<p>Sometimes it's good to follow an idea to the end, 
			even if the idea turns out to be a dud.</p>
		<p>An old friend of mine used to say 
			there's no such thing as wasted work. 
			You'll have cauterized that avenue of exploration 
			and know for sure that idea wasn't the one you needed.</p>
	</>,
	<>
		<p>If it doesn't work, it's not real.</p>
		<p>Whatever design you are working on has to meet 
		with reality at some point, and this process is messy, 
		full of compromises, and a crucial step of the process.</p>
	</>,
	<>
		<p>There is danger in a process that is driven by data alone.</p>
		<p>It ignores the magic that has to happen in order 
		for truly great solutions to be imagined.</p>
	</>,
	<>
		<p>Kirk and Spock were better together. Kirk brought the action, 
		Spock tempered it with strategy.</p>
		<p>Their dynamic helped them bridge the spectrum 
		and balance both extremes. 
		Without the strategy, the action will fail, but without action, 
		the strategy is meaningless.</p>
	</>,
	<p>When you say yes, say yes deeply.</p>,
	<p>My grandfather used to say:<br /> 
		"Get a good chair, because you can't always be motivated, 
		and sometimes you're going to have to sit on it until you're done."</p>,
	<>
		<p>In software development, 
			committing code is a great way to progress out of a mire.</p>
		<p>Often times it's faster to build 
			and test two proposed but conflicting directions, 
			than it is to discuss which one to pursue.</p>
	</>,
	<p>Share knowledge, then there will be more of it, 
		as my grandfather used to say.</p>,
	<p>No job requires you to be unkind.</p>,
	<p>Sleep makes everything better, 
		don't underestimate its powers of healing. 
		Get as much of it as you can.</p>,
	<p>Every day is a chance to start anew. 
		Consider the person you want to be, 
		and if what you see in the mirror isn't right, 
		it is <strong>never</strong> too late to make a change.</p>,
	<>
		<p>A career shouldn't be a zero sum game.</p>
		<p>Others can succeed without that impeding your own success. 
			In fact often helping others be successful will help you 
			many times over in the long run.</p>
	</>,
	<p>Consider that whatever shortcomings we perceive about 
		our individual situations often originate from human ideals 
		that change like the seasons. 
		So don't allow that to put you down. </p>,
	<>
		<p>Having principles is important. 
			Being open to changing them in light of new information 
			is even more important.</p>
		<p>Everything changes, 
			despite our best wishes for things to stay the same. 
			Closing oneself off from revisiting 
			strongly held convictions is just going to make 
			the ongoing change that much more painful.</p>
	</>,
	<p>Almost no task is too small to automate. 
	You'll be surprised how much time it'll save you in the long run.</p>,
	<p>If your feedback is worth sharing, it's worth more than 2 cents.</p>,
	<>
		<p>You don't have to have an opinion on everything.</p>
		<p>You can't know or do everything, 
			which is why it's so fortunate that 
			you can work with people who complete you. If you let them.</p>
	</>,
	<p>Small acts of leadership do not require a title. 
		When the outcome drives the process, 
		it doesn't matter who makes the right decision.</p>,
	<p>Don't build the tool until you know what it should accomplish. 
		Like any good mystery novel, start with the ending.</p>,
	<>
		<p>For every problem you fix, there's one less problem to fix.</p>
		<p>Keep going.</p>
	</>,
	<>
		<p>Comparing yourself to others is self-destructive. 
			The best antidote to this is to set personal goals.</p>
		<p>Incidentally, don't knock others for having New Year's resolutions. 
			Best case scenario, change happens. 
			Worst case: nothing happens.</p>
	</>,
	<>
		<p>Harry S. Truman said: It is amazing what you can accomplish 
			if you do not care who gets the credit.</p>
		<p>Ronald Reagan said, most similarly: 
			There is no limit to the amount of good you can do 
			if you don’t care who gets the credit.</p>
		<p>Despite being on opposing sides of the political spectrum, 
			they agreed on this principle: that actual progress, by nature, 
			is bi-partisan, 
			and is best made when the progress itself drives the effort.</p>
	</>,
	<p>Invest in trees. The long term ROI could be your way of life.</p>,
]

