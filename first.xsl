<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/orgnaization">
    <html>
        <head>
            <title>this is an xsl file</title>
        </head>
        <body bgcolor="teal">
            <h2 style="text-align:center">xsl data fetching</h2>
            <table border="3">
                <tr bgcolor="grey">
                    <th colspan="4">dalda employee</th>
                </tr>
                <tr bgcolor="skyblue">
                    <th>name</th>
                    <th>block</th>
                    <th>location</th>
                    <th>number</th>
                </tr>
                <xsl:for-each select="department">
                    <tr bgcolor="yellow">
                <td><xsl:value-of select="name"></xsl:value-of></td>
                <td><xsl:value-of select="block"></xsl:value-of></td>
                <td><xsl:value-of select="location"></xsl:value-of></td>
                <td><xsl:value-of select="number"></xsl:value-of></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>