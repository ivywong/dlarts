var grammar, lines, rules;

function preload() {
    // rules = loadStrings('haiku.json');
    rules = loadStrings('click.json');
}

function setup() {
    grammar = new RiGrammar(rules.join('\n'));
    lines = ["Click to Generate!", "", "", "", ""];

    for (var i = 0; i < 5; i++) {
        hl = createP(lines[i]);
        hl.parent('container');
        hl.id('headline' + i);
        hl.class('heading');
    }
}

function draw() {
    for (var i = 0; i < 5; i++) {
        hl = select('#headline' + i);
        hl.html(lines[i]);
    }
}

function mouseReleased() {
    for (var i = 0; i < 5; i++) {
        var result = grammar.expand();
        print(result);
        lines[i] = result;
    }
    print(lines);
}

