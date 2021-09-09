class QueenAttack {
  constructor(queen1, queen2) {
    if (
      queen1[0] < 0 ||
      queen1[0] > 7 ||
      queen1[1] < 0 ||
      queen1[1] > 7 ||
      queen2[0] < 0 ||
      queen2[0] > 7 ||
      queen2[1] < 0 ||
      queen2[1] > 7
    )
      throw new Error("Queens must be placed on the board");
    this.q1 = queen1;
    this.q2 = queen2;
  }

  canAttack() {
    let r1 = this.q1[0];
    let c1 = this.q1[1];
    let r2 = this.q2[0];
    let c2 = this.q2[1];

    if (r1 === r2 && c1 === c2)
      throw new Error("Queens cannot share same position");

    //Vertical Attack
    if (r1 == r2) return "!! Attack Possible !!";

    //Horizontal Attack
    if (c1 == c2) return "!! Attack Possible !!";

    //Diagonal Attack
    if (Math.abs((c1 - c2) / (r1 - r2)) === 1) return "!! Attack Possible !!";

    return "Queens cannot attack each other";
  }
}

const queen1 = [0, 0];
const queen2 = [7, 7];

const result = new QueenAttack(queen1, queen2);
console.log(result.canAttack());
