
import { MsToMin,fixDate } from "../components/details/EpisodesList";

describe('Functions to change miliseconds to minutes and get the correct date format',() => {

    describe('MsToMin',() => {
        test('should return a string in the format MM:SS when given a valid positive integer input', () => {
            expect(MsToMin(60000)).toBe('01:00')
            expect(MsToMin(120000)).toBe('02:00')
        })

        test('should return a string in the format 00:00 when given an input of 0', () => {
            expect(MsToMin(0)).toBe('00:00')
        })

        test('should return a string in the format 00:01 when given an input of 1000', () => {
            expect(MsToMin(1000)).toBe('00:01')
        })
    })

    describe('fixDate',() => {
        test('should return the date string formatted when given a date string in the format yyyy-mm-ddThh:mm:ssZ', () => {
            const date = '2022-01-01T00:00:00Z'
            const result = fixDate(date)
            expect(result).toBe('01/01/2022')
        })
    })
    
})