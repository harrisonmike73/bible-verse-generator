function generate(){
    let verses = {
        "Proverbs 3:5-6" : '"Trust in the LORD with all your heart, and do not learn on your own understanding. In all your ways acknowledge Him, and He will make straight your paths."',
        "John 15:12" : '"This is my commandment, that you love one another as I have loved you."',
        "1 Corinthians 16:14" : '"Let all that you do be done in love."',
        "Proverbs 10:12" : '"Hatred stirs up strife, But love covers all sins."',
        "James 4:8 " : '"Draw near to God, and he will draw near to you."',
        "Ephesians 4:32" : '"Be kind to one another, tenderhearted, forgiving one another, as God in Christ has forgiven you."',
        "1 Thessalonians 5:16" : '"Rejoice always"',
        "1 Thessalonians 5:17" : '"pray without ceasing,"',
        "Romans 10:13" : '"For whoever calls on the name of the Lord shall be saved."',
        "John 3:16" : '"For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."',
        "John 14:6" : '"I am the way and the truth and the life. No one comes to the Father except through me"',
        "Psalm 150:6" : '"Let everything that has breath praise the Lord! Praise the Lord!"',
        //Add more verses 
    }

    // generates an array of all the keys (authors)
    const authors = Object.keys(verses);

    const author = authors[Math.floor(Math.random() * authors.length)];

    const verse = verses[author];

    document.getElementById("verse").innerHTML = verse;
    document.getElementById("author").innerHTML = author;




}