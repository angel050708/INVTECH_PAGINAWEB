/** Une nombres de clase e ignora los vacíos: unirClases('a', cond && 'b'). */
export function unirClases(...clases: Array<string | false | null | undefined>): string {
  return clases.filter(Boolean).join(' ');
}
