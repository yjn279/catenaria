import { HERO } from '../content'

// チップの説明文は、見出しの数字を隠しても意味が変わらない形で書く
// （requirement.md「修正要望（2回目）」1）。数字に出した語句が説明文の中にも
// そのまま入っていることを、チップごとに確かめる。「2回まで」なら「2回」を含むかを見る。
for (const chip of HERO.chips) {
  const numeral = chip.value.replace(/まで$/, '')
  it(`チップ「${chip.value}」の説明文に「${numeral}」がそのまま含まれている`, () => {
    expect(chip.caption).toContain(numeral)
  })
}
