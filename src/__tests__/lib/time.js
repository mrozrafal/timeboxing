import {getMinutesAndSecondsFromDurationInSeconds} from "../../lib/time"
it ("works for 30s", () => {
    expect(
        getMinutesAndSecondsFromDurationInSeconds(30)
    ).toEqual(
        [0,30]
    )
})

it ("returns 30 seconds for 30s", () => {
    expect(
        getMinutesAndSecondsFromDurationInSeconds(30)[1]
    ).toBe(30)
})

it ("returns 0 minutes for 30s", () => {
    expect(
        getMinutesAndSecondsFromDurationInSeconds(30)[0]
    ).toBe(0)
})

it ("returns 2 minutes and 30 seconds for 150s", () => {
    expect(
        getMinutesAndSecondsFromDurationInSeconds(150)
    ).toEqual(
        [2,30]
    )
})

it('returns 1 minute for 60s', () => {
    expect(
        getMinutesAndSecondsFromDurationInSeconds(60)
    ).toEqual(
        [1,0]
    )
});